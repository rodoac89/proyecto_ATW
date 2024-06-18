from tokenize import Token 
from rest_framework import status 
from rest_framework.views import APIView 
from rest_framework.response import Response 
from rest_framework.authentication import TokenAuthentication 
from rest_framework.permissions import IsAuthenticated
from apps.core import utils

class Saludo(APIView):
    def get(self,request):
        response = utils.get_saludo()
        status_code = status.HTTP_404_NOT_FOUND if not response else status.HTTP_200_OK
        return Response(response, status_code)