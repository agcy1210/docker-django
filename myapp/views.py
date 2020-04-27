from django.shortcuts import render, redirect
from .models import myappmodel

def home(request):
    if request.method == "POST":
        firstname = request.POST['firstname']
        lastname = request.POST['lastname']
        age = request.POST['age']
        email = request.POST['email']

        q = myappmodel(firstname=firstname, lastname=lastname,age=age, email=email)
        q.save()
        
    return render(request, 'myapp/home.html')
