from apps.core.models import Persona
from apps.core.serializers import PersonaSerializer
from django.http import Http404


def get_name(i=None):
    if i is not None:
        try:
            i = int(i)
            p = Persona.objects.get(id=i)
            return PersonaSerializer(p).data
        except Exception as e:
            print(e)
            raise Http404
    else:
        raise Http404

def traer_personas():
    p = Persona.objects.all()
    return PersonaSerializer(p, many=True).data

def save_name(nombre = None):
    if nombre is not None and type(nombre) == str:
        Persona.objects.create(name = nombre)
        return True
    else:
        return False