import React, { useState, useEffect } from 'react';
import { Observable ,BehaviorSubject, fromEvent } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const todo = new BehaviorSubject(0);

function useTodoList(){
    const button = document.getElementById('sendBtn');
    const clickStream = fromEvent(button, 'click');   

    return{

    }
}