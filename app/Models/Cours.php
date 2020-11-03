<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    use HasFactory;


    public function formation()
    {
        return $this->belongsTo('App\Models\Formation');
    }
}
