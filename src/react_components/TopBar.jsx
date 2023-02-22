import { useState } from 'react';

export default function TopBar() {
    return (
        <div class="absolute inset-x-0 top-0 h-48 bg-blue-300 rounded-bl-lg rounded-br-lg dark:bg-red-600">
            <div class="relative font-bold text-4xl top-[50px]">Save and Manage your To-do list here!</div>
        </div>
    )
}