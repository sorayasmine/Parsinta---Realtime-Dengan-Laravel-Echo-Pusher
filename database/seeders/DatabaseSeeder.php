<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        collect([
            [
                'name' => 'Dina Fauziyah',
                'email' => 'dinafauzyh@gmail.com',
                'password' => bcrypt('rahasia123'),
                'username' => 'dinafauzyh',
            ],

            [
                'name' => 'M Faris Fauzi',
                'email' => 'emailproject070@gmail.com',
                'password' => bcrypt('kepoih123'),
                'username' => 'farisfauzi',
            ],
        ])->each(function ($user) {
            User::create($user);
        });

        \App\Models\User::factory(10)->create();
    }
}
