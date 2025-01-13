# Pasos para configurar un servidor con node en debian 12
## Instalar herramientas necesarias
```file```

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install git
sudo apt install tmux
sudo apt install unzip
```

## Instalar postgres
Descargar e instalar
```bash
sudo apt install postgresql postgresql-contrib
```

Crear superusuario en postgres
```bash
sudo -i -u postgres
psql
```

Una vez conectado realizar lo siguiente:
```sql
CREATE ROLE your_username WITH SUPERUSER LOGIN PASSWORD 'your_password';
\q -- Salir
```

Habilitar conexiones externas
```bash
# Descomentar listen_addresses = '*' dentro de postgresql.conf
sudo vim /etc/postgresql/<version>/main/postgresql.conf

# Agregar linea extra:
# host                all             all           0.0.0.0/0       md5
sudo vim /etc/postgresql/<version>/main/pg_hba.conf

# Reiniciar para aplicar cambios
sudo systemctl restart postgresql
```

## Install node con nvm
Ejecutar el comando
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source .bashrc # Reiniciar bash
nvm install <node-version> # Instalar node
```

## Clonar proyecots de github
Primero debes crear un token y despues clonar de la forma:

```bash
git clone https://<usuario-github>:<token>@github.com/<usuario>/<repositorio>.git

# Ejemplo
git clone https://AmaruVL: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@github.com/Giovdey/watana-back.git
```
