from django.http.response import JsonResponse
import json

def import_contents(request):
    json_str = request.body.decode("utf-8")
    json_data = json.loads(json_str)
    print(json_data["url"])
    return JsonResponse(json_data)