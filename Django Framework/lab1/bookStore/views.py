from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect

books_list = [
  {
    "index": 0,
    "id": 1,
    "name": "1984",
    "price": 799,
    "description": "George Orwell's dystopian novel depicting a totalitarian regime and the struggle for freedom and individuality."
  },
  {
    "index": 1,
    "id": 2,
    "name": "The Lord of the Rings",
    "price": 1299,
    "description": "J.R.R. Tolkien's epic fantasy trilogy following the journey of a group of characters to destroy a powerful ring and save Middle-earth from darkness."
  },
  {
    "index": 2,
    "id": 3,
    "name": "Harry Potter and the Sorcerer's Stone",
    "price": 899,
    "description": "J.K. Rowling's first book in the Harry Potter series, introducing the magical world of Hogwarts and the boy wizard's battle against the dark wizard, Lord Voldemort."
  },
  {
    "index": 3,
    "id": 4,
    "name": "The Hunger Games",
    "price": 799,
    "description": "Suzanne Collins' dystopian novel set in a post-apocalyptic world, where teenagers are forced to participate in a televised fight to the death."
  }
]

def index(request):
    return render(request, 'main/base_layout.html')

def _get_book(book_id):
    for book in books_list:
        if 'id' in book and book['id'] == book_id:
            return book
    return None
   
def bookstore_list(request):
    my_context = {'books_list': books_list}
    return render(request, 'bookstore_list.html',context=my_context)

def book_add(request):
    new_index = max(book['index'] for book in books_list) + 1
    new_book = {
        'index': new_index,
        'id': new_index + 1,
        'name':"Book" + str(new_index),
        'price': 2000,
        'description': "Book description",
    }
    books_list.append(new_book)
    return redirect('books-list')

def book_details(request, **kwargs):
    book_id = kwargs.get('book_id')
    book_object = _get_book(book_id)
    my_context = {
        'book_id': book_object.get('id'),
        'book_name': book_object.get('name'),
        'book_price': book_object.get('price'),
        'book_description': book_object.get('description')
    }
    return render(request, 'book_details.html', context=my_context)

def book_update(request, **kwargs):
    book_id = kwargs.get('book_id')
    book_object = _get_book(book_id)
    for book in books_list:
        if book == book_object:
            book['name'] = f"Update {book_object['name']}"
    return redirect('books-list')

def book_delete(request, **kwargs):
    book_id = kwargs.get('book_id')
    book_object = _get_book(book_id)
    if books_list:
        books_list.remove(book_object)
    return redirect('books-list') 

