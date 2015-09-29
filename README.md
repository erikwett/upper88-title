# &lt;upper88-title&gt;

> Custom element to set document title.
> Avoid typing the same title in the page and in the header.
> Makes it possible to use Polymer data binding for the title.
>

## Demo

[Check it live!](http://upper88.com) 

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install upper88-title --save
```

Or [download as ZIP](https://github.com/erikwett/upper88-title/archive/master.zip).

## Usage

1. Import polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
    ```

2. Import custom element:

    ```html
    <link rel="import" href="bower_components/upper88-title/upper88-title.html">
    ```

3. Start using it!

    Avoid typing the same title twice:

    ```html
    <h1><upper88-title>My <strong>cool</strong> Homepage</upper88-title></h1>
     ```
     
     Set title as an attribute:
     ```html
    <upper88-title value="My Homepage"></upper88-title>
     ```
     Use data binding for the tritle>
     ```html
    <upper88-title value="[[title]]"></upper88-title>
    
    ```

## Options

Attribute     | Options     | Default      | Description
---           | ---         | ---          | ---
value         | *String*    | none         | The title. Set as both element innerHtml and (without html tags) document.title

## History

For detailed changelog, check [Releases](https://github.com/erikwett/upper88-title/releases). 

## License

[MIT License](http://opensource.org/licenses/MIT) 


