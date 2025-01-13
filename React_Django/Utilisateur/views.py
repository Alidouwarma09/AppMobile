import json

import requests
from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from Model.models import Publication, Utilisateur
from rest_framework.authtoken.models import Token


# Create your views here.

def liste_publications(request):
    publications = Publication.objects.all().order_by('-date_pub')
    data = []

    for publication in publications:
        data.append({
            'id': publication.id,
            'titre': publication.titre,
            'contenu': publication.contenu,
            'image': publication.image.url if publication.image else None,
            'date_pub': publication.date_pub.strftime('%Y-%m-%d %H:%M:%S')
        })

    return JsonResponse(data, safe=False)


@csrf_exempt
def inscription(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            nom = data.get('nom')
            prenom = data.get('prenom')
            username = data.get('username')
            password = data.get('password')

            if not all([nom, prenom, username, password]):
                return JsonResponse({
                    "success": False,
                    "message": "Tous les champs sont obligatoires"
                }, status=400)

            # Vérifier si le nom d'utilisateur existe déjà
            if Utilisateur.objects.filter(username=username).exists():
                return JsonResponse({
                    "success": False,
                    "message": "Ce numéro est déjà utilisé"
                }, status=400)

            # Créer un nouvel utilisateur
            user = Utilisateur.objects.create_user(
                username=username,
                password=password
            )
            user.nom = nom
            user.prenom = prenom
            user.save()

            return JsonResponse({
                "success": True,
                "message": "Utilisateur créé avec succès"
            }, status=201)

        except json.JSONDecodeError:
            return JsonResponse({
                "success": False,
                "message": "Format de données invalide"
            }, status=400)

        except Exception as e:
            return JsonResponse({
                "success": False,
                "message": f"Erreur serveur : {str(e)}"
            }, status=500)
    else:
        return JsonResponse({
            "success": False,
            "message": "Méthode non autorisée"
        }, status=405)


class ConnexionView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        utilisateur = authenticate(username=username, password=password)

        if utilisateur:
            token, created = Token.objects.get_or_create(user=utilisateur)

            return Response({'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Identifiants incorrects'}, status=status.HTTP_401_UNAUTHORIZED)


def send_push_notification(request):
    if request.method == "POST":
        try:
            data = request.json()
            push_token = data.get('token')
            title = data.get('title', "Notification")
            body = data.get('body', "Voici une notification")

            if not push_token:
                return JsonResponse({"error": "Token is required"}, status=400)

            print(f"Token reçu: {push_token}")  # Ajoutez un log pour vérifier
            print(f"Envoyer la notification avec titre: {title}, corps: {body}")

            url = "https://exp.host/--/api/v2/push/send"
            headers = {
                "Content-Type": "application/json",
            }
            payload = {
                "to": push_token,
                "title": title,
                "body": body,
                "data": {"customData": "info supplémentaire si nécessaire"},
            }

            response = requests.post(url, json=payload, headers=headers)

            if response.status_code == 200:
                print("Notification envoyée avec succès.")
                return JsonResponse({"message": "Notification sent successfully"}, status=200)
            else:
                print(f"Échec de l'envoi de la notification: {response.text}")
                return JsonResponse({"error": "Failed to send notification", "details": response.json()}, status=500)
        except Exception as e:
            print(f"Erreur: {str(e)}")  # Ajoutez un log pour capturer l'erreur
            return JsonResponse({"error": str(e)}, status=500)
    return JsonResponse({"error": "Invalid method"}, status=405)
