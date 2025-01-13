
from django.urls import path

from Utilisateur import views
from Utilisateur.views import liste_publications, inscription, ConnexionView, send_push_notification

app_name = 'Utilisateur'

urlpatterns = [
    path('api/liste_publications/', liste_publications, name='liste_publications'),
    path('api/inscription/', inscription, name='inscription'),
    path('api/connexion/', ConnexionView.as_view(), name='connexion'),
    path('api/send_push_notification/', send_push_notification, name='send_push_notification'),

]
