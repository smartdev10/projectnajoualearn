<?php

namespace App\Http\Controllers\Auth\Login;

use App\Http\Controllers\Auth\LoginController as DefaultLoginController;
use Illuminate\Support\Facades\Auth;

class TeacherController extends DefaultLoginController
{
    protected $redirectTo = '/teacher/home';
    public function __construct()
    {
        $this->middleware('guest:formateur')->except('logout');
    }
    public function showLoginForm()
    {
        return view('auth.teacher.login');
    }
    public function showRegisterForm()
    {
        return view('auth.teacher.register');
    }
    public function username()
    {
        return 'email';
    }
    protected function guard()
    {
        return Auth::guard('formateur');
    }
}
