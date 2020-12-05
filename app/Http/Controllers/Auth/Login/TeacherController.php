<?php

namespace App\Http\Controllers\Auth\Login;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Departement;
use App\Models\Formateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\AuthenticatesUsers;


class TeacherController extends Controller
{

    use AuthenticatesUsers;

    protected $redirectTo = '/teacher/home';
    public function __construct()
    {
        $this->middleware('guest:formateur')->except('logout');
    }
    public function showLoginForm()
    {
        return view('auth.teacher.login');
    }

    public function login(Request $request)
    {
        $this->validate($request, [
            'email'   => 'required|email',
            'password' => 'required|min:6'
        ]);

        if ($this->guard()->attempt($this->credentials($request))){
            return redirect()->intended('/teacher/home');
        }
        return back()->withInput($request->only('email', 'remember'));
    }



    public function register(Request $request)
    {
        Formateur::create([
            'name' => $request->name,
            'email' => $request->email,
            'departement_id' => $request->departement_id,
            'password' => Hash::make($request->password),
        ]);
        return redirect('/teacher/login');
    }

    public function showRegisterForm()
    {
        $departements = Departement::all();
        return view('auth.teacher.register' , ['departements' => $departements]);
    }
    public function unsername(){
        return 'email';
    }

    protected function guard()
    {
        return Auth::guard('formateur');
    }
}
