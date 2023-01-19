from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib import auth
# Create your views here.

@csrf_exempt
def register(request):
    data = {
        
    }
    if request.method == 'POST':
        data = JSONParser().parse(request)
        # print(data)
        # print(data['email'], ' ', data['password'])

        if data['password2'] == data['password']:
            if User.objects.filter(email=data['email']).exists():
                err = messages.error(request, 'Email exists')
                return JsonResponse('Email Exists', status=400, safe=False)
            else:
                user = User.objects.create_user(username=data['email'], email=data['email'])
                user.set_password(data['password'])
                user.save()
            res = user.email
            return JsonResponse(res, safe=False)
        # Once frontend is ready redirect to index
    return HttpResponse('hello')

@csrf_exempt
def login(request):
    data = JSONParser().parse(request)
    if request.method == 'POST':
        if User.objects.filter(email=data['email']).exists():
            user = auth.authenticate(username=data['email'], password=data['password'])
            # user = User.objects.filter(email=data['email']).get()
            if user is not None:
                auth.login(request, user)
                print(type(user))
                return JsonResponse('done', safe=False)
        else:
            return JsonResponse('User not found', status=400)
    return HttpResponse('<h1>LOGIN</h1>')


