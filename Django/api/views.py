from django.http.response import JsonResponse
import json
import sys
sys.path.append('../')
from middleware.Quizlet_Scraper import url_add

def import_contents(request):
    json_str = request.body.decode("utf-8")
    json_data = json.loads(json_str)
    print(json_data["url"])
    url_add(json_data["url"])
    return JsonResponse(json_data)