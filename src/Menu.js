import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <div>
            <div class="header">
                <h1><NavLink to= "/" id="nav-logo">SBB Review Quizzes</NavLink></h1>
            </div>
        </div>
    )
}