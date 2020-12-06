<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;
use App\Models\Message;
use Illuminate\Support\Facades\Validator;

class StudenMessagesController extends Controller
{

    public function  create(Request $request){

         $validator = Validator::make($request->all(), [
            'name' => 'required',
         ]);
         if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 404);
         }
         $departement = Message::create([
            'name' => $request->get('name'),
         ]);
         $departement->save(); 
         return response()->json(['message'=>'created']);
    }

    public function messages(){
        return  Room::all();
    }
    // function Show Contenet
    public function show($id){
        // find with Id AND return ID
          $departement = Message::find($id);
          return $departement;
    }

    // fUNCTION UPDATE 
    public function edit(Request $request , $id){
       $departement = Message::find($id);
       $departement->name = $request->name;
       $departement->save();
       return response()->json(['message'=>'saved']);

    }

    // FUNCTION DELET 
    public function destroy($id){

        $departement = Message::find($id);
        $departement->delete();
        return response()->json(['message'=>'created']);
     
    }

}