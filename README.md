# Web Development Project 4 - *Pokemon Gallery*

Submitted by: **Mariia Onokhina**

This web app: **is a showcase for 777 types of Pokémon. It uses PokeApi to get the information about Pokémon, as well as HybridShivam's repository containing high quality images (https://github.com/HybridShivam/Pokemon).**

Time spent: **13** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [X] **Only one item/API call is viewable at a time**
- [X] **API calls appear random to the user**
- [X] **At least one image is displayed per API call**
- [X] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
- [X] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [X] Multiple types of attributes can be added to the ban list
- [X] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

* [X] No more than 6 ban list attributes can be added at the same time.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='Website Walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LiceCap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

* I couldn't get the API attributes to work properly. It would always result in an error. It turns out I was trying to get attributes from API response and not response.data.
* There are not many APIs with high quality Pokemon images that worked for me. PokeAPI has images in retro pixel style.
* The loading time of the images is a bit slow because I'm using high quality PNG images. However, compared to another API I was trying to use, these images work much faster.
* Ban list didn't work properly until I figured out that I had to use state variables instead of regular Javascript variables.

## License

    Copyright [2023] [Mariia Onokhina]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.