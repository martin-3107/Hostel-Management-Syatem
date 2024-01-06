import React from "react";
import { SocialIcon } from 'react-social-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer(){

    //let imgSrc = "data:image/png;base64,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";

    return <footer class="bg-white dark:bg-purple-500">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <FontAwesomeIcon icon="fa-solid fa-check-square" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HMS</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-white">
                <li>
                    <SocialIcon url="https://www.instagram.com/isthat_khanjan" bgColor="transparent" />
                </li>
                <li>
                    <SocialIcon url="https://www.linkedin.com/" bgColor="transparent" />
                </li>
                <li>
                    <SocialIcon url="https://twitter.com/" bgColor="transparent" />
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 text-rose-200 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 text-rose-200 md:me-6">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-8 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-pink-100">© 2023 <a href="#" class="hover:underline">Owner</a>. All Rights Reserved.</span>
    </div>
</footer>
}

export default Footer;