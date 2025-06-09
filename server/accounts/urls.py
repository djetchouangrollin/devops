from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'experiences', views.ExperienceViewSet)
router.register(r'projects', views.ProjectViewSet)
router.register(r'formations', views.FormationViewSet)

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('', include(router.urls)),
] 