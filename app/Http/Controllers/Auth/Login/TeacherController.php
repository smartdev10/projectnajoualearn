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
    public function username()
    {
        return 'teacher_id';
    }
    protected function guard()
    {
        return Auth::guard('formateur');
    }
}
