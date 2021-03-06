<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Formateur extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $guard = 'formateur';

    protected $fillable = [
        'name',
        'email',
        'departement_id',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function rooms()
    {
        return $this->hasMany('App\Models\FormateurRoom');
    }

    public function departement()
    {
        return $this->belongsTo('App\Models\Departement');
    }

    public function tickets()
    {
        return $this->hasMany('App\Models\FormateurTicket');
    }

}
