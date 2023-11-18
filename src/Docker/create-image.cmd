docker build --no-cache -f SQL\Dockerfile.PostgreSql -t _probnyjj/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t _probnyjj/app ../..
