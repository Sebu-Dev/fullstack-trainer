#!/bin/bash

# Projektverzeichnis
PROJECT_DIR="/root/project/fullstack_trainer_backend_frontend_docker"
DOCKER_DIR="$PROJECT_DIR/docker"

# Funktion zum Abfragen von Variablen mit Default-Werten
prompt_with_default() {
    local var_name="$1"
    local default_value="$2"
    local prompt_message="$3"
    read -p "$prompt_message [$default_value]: " input
    # Wenn keine Eingabe, Default verwenden
    if [ -z "$input" ]; then
        echo "$default_value"
    else
        echo "$input"
    fi
}

# In Projektverzeichnis wechseln
cd "$PROJECT_DIR"

# Git Pull ausführen
echo "Pulling latest changes from Git..."
git pull origin main  # Passe 'main' an deinen Branch an, falls nötig

# In Docker-Verzeichnis wechseln
cd "$DOCKER_DIR"

# Bestehende .env-Datei löschen, falls vorhanden
if [ -f ".env" ]; then
    echo "Lösche bestehende .env-Datei..."
    rm .env
fi

# Abfrage der Umgebungsvariablen mit Defaults
echo "Konfiguration der Umgebungsvariablen..."

# Datenbank-Konfiguration
POSTGRES_DB=$(prompt_with_default "POSTGRES_DB" "fullstack_trainer_db" "PostgreSQL Datenbankname")
POSTGRES_USER=$(prompt_with_default "POSTGRES_USER" "flo" "PostgreSQL Benutzername")
POSTGRES_PASSWORD=$(prompt_with_default "POSTGRES_PASSWORD" "swordfish" "PostgreSQL Passwort")
POSTGRES_HOST=$(prompt_with_default "POSTGRES_HOST" "db" "PostgreSQL Host")
POSTGRES_PORT=$(prompt_with_default "POSTGRES_PORT" "5432" "PostgreSQL Port")

# Spring Boot Konfiguration (abhängig von DB-Variablen)
SPRING_DATASOURCE_URL=$(prompt_with_default "SPRING_DATASOURCE_URL" "jdbc:postgresql://$POSTGRES_HOST:$POSTGRES_PORT/$POSTGRES_DB" "Spring Datasource URL")
SPRING_DATASOURCE_USERNAME=$(prompt_with_default "SPRING_DATASOURCE_USERNAME" "$POSTGRES_USER" "Spring Datasource Benutzername")
SPRING_DATASOURCE_PASSWORD=$(prompt_with_default "SPRING_DATASOURCE_PASSWORD" "$POSTGRES_PASSWORD" "Spring Datasource Passwort")
SPRING_JPA_HIBERNATE_DDL_AUTO=$(prompt_with_default "SPRING_JPA_HIBERNATE_DDL_AUTO" "update" "Spring JPA Hibernate DDL Auto")
SPRING_PROFILES_ACTIVE=$(prompt_with_default "SPRING_PROFILES_ACTIVE" "development" "Spring Profiles Active")

# PgAdmin
PGADMIN_DEFAULT_EMAIL=$(prompt_with_default "PGADMIN_DEFAULT_EMAIL" "admin@admin.com" "PgAdmin E-Mail")
PGADMIN_DEFAULT_PASSWORD=$(prompt_with_default "PGADMIN_DEFAULT_PASSWORD" "admin" "PgAdmin Passwort")

# Frontend
VITE_FEATURE_DEV=$(prompt_with_default "VITE_FEATURE_DEV" "true" "Vite Feature Dev (true/false)")
VITE_API_BASE_URL=$(prompt_with_default "VITE_API_BASE_URL" "http://217.154.77.26:8080" "Vite API Base URL")
VITE_API_USERNAME=$(prompt_with_default "VITE_API_USERNAME" "meinBenutzername" "Vite API Benutzername")
VITE_API_PASSWORD=$(prompt_with_default "VITE_API_PASSWORD" "meinPasswort" "Vite API Passwort")

NEW_IP="http://217.154.77.26:8080"
sed -i "s|VITE_API_BASE_URL=.*|VITE_API_BASE_URL=$NEW_IP|" ../fullstack-trainer-frontend/.env.development

# Exportieren der Variablen in die Shell
export POSTGRES_DB POSTGRES_USER POSTGRES_PASSWORD POSTGRES_HOST POSTGRES_PORT
export SPRING_DATASOURCE_URL SPRING_DATASOURCE_USERNAME SPRING_DATASOURCE_PASSWORD SPRING_JPA_HIBERNATE_DDL_AUTO SPRING_PROFILES_ACTIVE
export PGADMIN_DEFAULT_EMAIL PGADMIN_DEFAULT_PASSWORD
export VITE_FEATURE_DEV VITE_API_BASE_URL VITE_API_USERNAME VITE_API_PASSWORD

# Ausgabe zur Bestätigung
echo -e "\nGesetzte Umgebungsvariablen:"
echo "POSTGRES_DB=$POSTGRES_DB"
echo "POSTGRES_USER=$POSTGRES_USER"
echo "POSTGRES_PASSWORD=$POSTGRES_PASSWORD"
echo "POSTGRES_HOST=$POSTGRES_HOST"
echo "POSTGRES_PORT=$POSTGRES_PORT"
echo "SPRING_DATASOURCE_URL=$SPRING_DATASOURCE_URL"
echo "SPRING_DATASOURCE_USERNAME=$SPRING_DATASOURCE_USERNAME"
echo "SPRING_DATASOURCE_PASSWORD=$SPRING_DATASOURCE_PASSWORD"
echo "SPRING_JPA_HIBERNATE_DDL_AUTO=$SPRING_JPA_HIBERNATE_DDL_AUTO"
echo "SPRING_PROFILES_ACTIVE=$SPRING_PROFILES_ACTIVE"
echo "PGADMIN_DEFAULT_EMAIL=$PGADMIN_DEFAULT_EMAIL"
echo "PGADMIN_DEFAULT_PASSWORD=$PGADMIN_DEFAULT_PASSWORD"
echo "VITE_FEATURE_DEV=$VITE_FEATURE_DEV"
echo "VITE_API_BASE_URL=$VITE_API_BASE_URL"
echo "VITE_API_USERNAME=$VITE_API_USERNAME"
echo "VITE_API_PASSWORD=$VITE_API_PASSWORD"

# Docker Compose stoppen (falls es läuft)
echo "Stopping existing containers..."
docker compose down

# Docker Compose starten
echo "Building and starting Docker Compose..."
docker compose up --build