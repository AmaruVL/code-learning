# CONFIGURACION PARA INGRESAR CON CLAVE RSA POR SSH
# Windows: Copiar RSA publica al servidor y dar permisos
type {ruta-rsa.pub} | ssh {user}@{host} "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys"

|> type D:\Gore\key-server.pub | ssh root@145.79.6.144 "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys"

# Forma de iniciar session:
ssh {user}@{host} -i {ruta-rsa-private}

|> ssh root@145.79.6.144 -i D:\Gore\key-server
|> ssh 145.79.6.144 -i D:\Gore\key-server # Si es root el usuario
|> scp -i D:\Gore\key-server 10.0.9.43:/root/backups/* . # Copiando archivos
