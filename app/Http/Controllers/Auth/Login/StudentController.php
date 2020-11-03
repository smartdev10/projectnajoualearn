<?php

namespace App\Http\Controllers\Auth\Login;

use App\Http\Controllers\Auth\LoginController as DefaultLoginController;
use Illuminate\Support\Facades\Auth;

class StudentController extends DefaultLoginController
{
    protected $redirectTo = '/student/home';
    public function __construct()
    {
        $this->middleware('guest:student')->except('logout');
    }
    public function showLoginForm()
    {
        return view('auth.student.login');
    }
    public function username()
    {
        return 'student_id';
    }
    protected function guard()
    {
        return Auth::guard('student');
    }
}
