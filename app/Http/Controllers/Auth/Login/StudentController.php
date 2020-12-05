<?php

namespace App\Http\Controllers\Auth\Login;

use App\Http\Controllers\Auth\LoginController as DefaultLoginController;
use App\Models\Formation;
use App\Models\Student;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StudentController extends DefaultLoginController
{

    use AuthenticatesUsers;

    protected $redirectTo = '/student/home';
    public function __construct()
    {
        $this->middleware('guest:student')->except('logout');
    }
    public function showLoginForm()
    {
        return view('auth.student.login');
    }

    public function login(Request $request)
    {
        $this->validate($request, [
            'email'   => 'required|email',
            'password' => 'required|min:6'
        ]);

        if ($this->guard()->attempt($this->credentials($request))){
            return redirect()->intended('/student/home');
        }
        return back()->withInput($request->only('email', 'remember'));
    }



    public function register(Request $request)
    {
        Student::create([
            'name' => $request->name,
            'email' => $request->email,
            'formation_id' => $request->formation_id,
            'password' => Hash::make($request->password),
        ]);
        return redirect('/student/login');
    }

    public function showRegisterForm()
    {
        $formations = Formation::all();
        return view('auth.student.register',['formations' => $formations]);
    }

    protected function guard()
    {
        return Auth::guard('student');
    }
}
