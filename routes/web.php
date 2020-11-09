<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
})->middleware('auth');

Route::prefix('admin')->group(function () {
    Route::get('{any?}', function () {
        return view('index');
    })->where('any', '.*')->middleware('auth');
});


Route::prefix('teacher')
    ->as('teacher.')
    ->group(function() {
        Route::get('home',  [App\Http\Controllers\Home\TeacherHomeController::class ,'index'])->name('home');
        Route::namespace('Auth\Login')->group(function() {
            Route::get('login', [App\Http\Controllers\Auth\Login\TeacherController::class , 'showLoginForm'])->name('login');
            Route::get('register', [App\Http\Controllers\Auth\Login\TeacherController::class , 'showRegisterForm'])->name('register');
            Route::post('register', [App\Http\Controllers\Auth\Login\TeacherController::class , 'register'])->name('register');
            Route::post('login', [App\Http\Controllers\Auth\Login\TeacherController::class ,'login'])->name('login');
            Route::post('logout',  [App\Http\Controllers\Auth\Login\TeacherController::class ,'logout'])->name('logout');
      });
 });

 Route::prefix('student')
    ->as('student.')
    ->group(function() {
        Route::get('home',  [App\Http\Controllers\Home\StudentHomeController::class ,'index'])->name('home');
        Route::namespace('Auth\Login')->group(function() {
            Route::get('login', [App\Http\Controllers\Auth\Login\StudentController::class , 'showLoginForm'])->name('login');
            Route::get('register', [App\Http\Controllers\Auth\Login\StudentController::class , 'showRegisterForm'])->name('register');
            Route::post('register', [App\Http\Controllers\Auth\Login\StudentController::class , 'register'])->name('register');
            Route::post('login', [App\Http\Controllers\Auth\Login\StudentController::class ,'login'])->name('login');
            Route::post('logout',  [App\Http\Controllers\Auth\Login\StudentController::class ,'logout'])->name('logout');
      });
 });


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group(['middleware' => 'auth', 'prefix' => 'auth'], function ($router) {
    Route::post('me', [App\Http\Controllers\AuthController::class, 'me']);
});

Route::group(['middleware' => 'auth', 'prefix' => 'api/departements'], function ($router) {
    Route::post('create', [App\Http\Controllers\AuthController::class, 'create']);
});
  
// DEPARTEMENT FUNCTIONS  Roots
Route::prefix('api/departements')->group(function () {
    Route::get('', [App\Http\Controllers\DepartementController::class, 'departements']);
    Route::get('show/{id}', [App\Http\Controllers\DepartementController::class, 'show']);
    Route::post('create', [App\Http\Controllers\DepartementController::class, 'creat_departement']);
    Route::post('edit', [App\Http\Controllers\DepartementController::class, 'edit']);
    Route::delete('delete/{id}', [App\Http\Controllers\DepartementController::class, 'destroy']);
});

// Formation FUNCTIONS  Roots
Route::prefix('api/formations')->group(function () {
    Route::get('', [App\Http\Controllers\DepartementController::class, 'formations']);
    Route::get('show/{id}', [App\Http\Controllers\DepartementController::class, 'show']);
    Route::post('create', [App\Http\Controllers\DepartementController::class, 'creat_formation']);
    Route::post('edit', [App\Http\Controllers\DepartementController::class, 'edit']);
    Route::delete('delete/{id}', [App\Http\Controllers\DepartementController::class, 'destroy']);
});