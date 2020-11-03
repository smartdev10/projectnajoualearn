<?php

namespace App\Http\Controllers\Home;
use App\Http\Controllers\Controller;

class TeacherHomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:formateur');
    }
    public function index()
    {
        return view('teacher');
    }
}
