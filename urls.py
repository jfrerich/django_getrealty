from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView

from . import views
# from .views import ViewDbList, ViewDbListJson, ZeroConfigurationDatatableView
from .views import ViewDbListJson, ZeroConfigurationDatatableView, detailview

urlpatterns = [
    path('', views.home, name='realty'),
    path('viewDb/', views.viewDb, name='viewDb'),
    path('viewDb_data/', ViewDbListJson.as_view(), name="viewdb_list_json"),

    # path('viewDb/', views.modelDb, name='modelDb'),
    # path('javascript-initialization/', views.JavascriptInitializationView.as_view(), name="js-init"),

    # path('viewModelDb/', views.viewModelDb, name="viewModelDb"),
    path('viewModelDb_data/', csrf_exempt(ZeroConfigurationDatatableView.as_view()), name="viewModelDb_data"),
    # path('viewModelDb_data/', views.ZeroConfigurationDatatableView, name="viewModelDb_list_json"),

    path('overview/', views.overview, name='overview'),
    path('query/', views.query, name='query'),
    # path('detail/', views.detail, name='detail'),
    # path('detail/', detailview.as_view(template_name='realty/propertydetail.html'), name='detail'),
    path('detail/', detailview.as_view(), name='detail'),
    path('testpage/', views.testpage, name='testpage'),
    path('testPage2/', views.testPage2, name='testPage2'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
