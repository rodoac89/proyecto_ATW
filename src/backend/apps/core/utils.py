from apps.core.models import Saludo
from apps.core.serializers import SaludoSerializer


def get_saludo():
    s = Saludo.objects.get(id=1)
    return SaludoSerializer(s).data