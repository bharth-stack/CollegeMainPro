# Generated by Django 4.1.5 on 2023-01-19 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expense', '0003_alter_expense_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expense',
            name='amount',
            field=models.CharField(default='1', max_length=100),
        ),
    ]