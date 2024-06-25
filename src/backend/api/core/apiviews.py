from tokenize import Token 
from rest_framework import status 
from rest_framework.views import APIView 
from rest_framework.response import Response 
from rest_framework.authentication import TokenAuthentication 
from rest_framework.permissions import IsAuthenticated
from apps.core import utils

class Persona(APIView):
    def get(self,request):
        response = utils.get_name(request.GET['id'])
        status_code = status.HTTP_404_NOT_FOUND if not response else status.HTTP_200_OK
        return Response(response, status_code)
    
    def post(self, request, format='json'):
        saved = utils.save_name(request.data['nombre'])
        status_code = status.HTTP_200_OK if saved else status.HTTP_404_NOT_FOUND
        return Response(status=status_code)
    
class ListPersona(APIView):
    def get(self,request):
        response = utils.get_names()
        status_code = status.HTTP_404_NOT_FOUND if not response else status.HTTP_200_OK
        return Response(response, status_code)