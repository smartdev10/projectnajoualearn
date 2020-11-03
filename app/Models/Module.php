<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;

    public function formation()
    {
        return $this->belongsTo('App\Models\Formation');
    }

    public function cours()
    {
        return $this->hasMany('App\Models\Cours');
    }
}
