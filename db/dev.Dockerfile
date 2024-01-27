FROM postgres:16.1

COPY init.sh /docker-entrypoint-initdb.d/
COPY schema.sql /seed/schema.sql
COPY seed_*.sql /seed/

RUN chmod +x /docker-entrypoint-initdb.d/init.sh