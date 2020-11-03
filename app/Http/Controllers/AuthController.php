<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
   
    public function me() {

        $reposne = ['result' => false];
        $user = Auth::user();
        if ($user) {
            $reposne['result'] = true;
            $reposne['user'] = $user;
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json($reposne);
    }
}
