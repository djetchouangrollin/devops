from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from accounts import views  # Remplace "mainapp" par le nom de ton app si différent
from django.http import JsonResponse
import django_prometheus

def home_view(request):
    # Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
    if not request.user.is_authenticated:
        return JsonResponse({
            'status': 'error',
            'message': 'Authentication required',
            'redirect_url': '/api/login/'
        }, status=401)
    
    # Si l'utilisateur est connecté, afficher le portfolio
    return JsonResponse({
        'status': 'success',
        'message': 'Portfolio page',
        'data': {
            'title': 'Mon Portfolio',
            'description': 'Bienvenue sur mon portfolio',
            'user': {
                'username': request.user.username,
                'email': request.user.email
            }
        }
    })

def portfolio_view(request):
    return JsonResponse({
        'status': 'success',
        'message': 'Portfolio page',
        'data': {
            'title': 'Mon Portfolio',
            'description': 'Bienvenue sur mon portfolio'
        }
    })

urlpatterns = [
    path('', home_view, name='home'),  # Route par défaut qui affiche le portfolio
    path('admin/', admin.site.urls),
    path('api/login/', views.login_view, name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('portfolio/', portfolio_view, name='portfolio'),
    path('', include('django_prometheus.urls')),  # Ajout des métriques Prometheus
    # path('dashboard/', views.dashboard_view, name='dashboard'),  # Désactivé temporairement
]
