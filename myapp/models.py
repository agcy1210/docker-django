from django.db import models


class myappmodel(models.Model):
    firstname = models.CharField(max_length=20)
    lastname = models.CharField(max_length=20)
    age = models.IntegerField()
    email = models.EmailField()