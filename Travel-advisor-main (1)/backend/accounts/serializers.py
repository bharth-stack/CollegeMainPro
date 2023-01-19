
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User

class UserCreateSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators = [UniqueValidator(queryset=User.objects.all())]
    )
    
    username = email

    password = serializers.CharField(min_length=8)
    password2 = serializers.CharField(min_length=8)

    # def create(self, validated_data):
    #     user = User.objects.create_user(validated_data['username'], validated_data['email'])
    #     user.set_password(validated_data['password'])
    #     user.save()
    #     return user
    
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')

class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators = [UniqueValidator(queryset=User.objects.all())]
    )

    password = serializers.CharField(min_length=8)


