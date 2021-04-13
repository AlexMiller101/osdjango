from django.shortcuts import render

# Create your views here.
def indexOS(request):
    return render(request, 'os.html')

def folders(request, id):
    return render(request, 'folders.html', {'id':id})    