const { execSync } = require('child_process');

try {
  console.log('Installation des dépendances avec --legacy-peer-deps...');
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
} catch (error) {
  console.error('Échec de l\'installation des dépendances avec --legacy-peer-deps');
  process.exit(1);
}
