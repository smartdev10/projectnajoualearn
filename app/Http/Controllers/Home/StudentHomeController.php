<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;

class StudentHomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('student');
    }
    public function index()
    {
        return view('student');
    }
}
