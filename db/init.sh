#!/bin/bash

echo "🏗️ Setting up schema..."
psql -U $POSTGRES_USER -d $POSTGRES_DB -a -f "/seed/schema.sql"
echo "✅ Done"


# # Loop through all files with the format seed_*.sql and run them
# for file in /seed/seed_*.sql; do
#     echo "🌱 Seeding $file..."
#     psql -U $POSTGRES_USER -d $POSTGRES_DB -a -f "$file"
#     echo "✅ Done"
# done

echo "🌱 Seeding customers and operators..."
psql -U $POSTGRES_USER -d $POSTGRES_DB -a -f "/seed/seed_customers.sql"
psql -U $POSTGRES_USER -d $POSTGRES_DB -a -f "/seed/seed_operators.sql"
echo "✅ Done"