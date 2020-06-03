
# RavenJS
 My custom MVVM framework.

## Table of contents


## 1. Basic features

### 1.1. Bindables
#### 1.1.1. Egg
You can simply create a bindable variable by using the `RavenJS` object.

**Example**

`var bindable = RavenJS.Egg("bindable string");`

#### 1.1.2. Eggs
### 1.2. Components
#### 1.2.1. Component
#### 1.2.2. All-on-one
#### 1.2.3. Template
#### 1.2.4. Styles
### 1.3. Binding
#### 1.3.1. value (two-way data binding)

You can simply bind a value to a HTML Element, with `raven-value` attribute. The objects, that are binded by the `raven-value` uses two-way-data-binding, that means, if the model (or viewmodel) changes, the binded value changes in the view too, and vice-versa, when the user changes it, it changes in the viewmodel too.

The `raven-value` attribute works on every standarad [HTML element](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlelement.html).

**Example**

`<input type="text" raven-value="bindable" />`

#### 1.3.2. text
#### 1.3.3. HTML
#### 1.3.4. conditional statements
##### 1.3.4.1. if statement
##### 1.3.4.2. notif statement
##### 1.3.4.3. elseif statement
##### 1.3.4.4. else statement
#### 1.3.5. loops
##### 1.3.5.1. foreach statement
##### 1.3.5.2. for statemen
#### 1.3.6. create raven nest
To bind all of your bindables the currently active template (so, bind your viewmodel to your model), you need to create a raven nest.
First of all, you need two things to do this.
- need a HTML element
- need a viewmodel

For the HTML element you can use a queryselector, or an instance.

For the viewmodel, you can use any object we discussed before.

**EXAMPLE**

    <div id="demo-container">
     <label for="string-input">String: </label>
     <input type="text" id="string-input" raven-value="propertyName1" />
     <hr />
     
     <label for="number-input">Number: </label>
     <input type="text" id="number-input" raven-value="propertyName2" />
     <hr />
     
     <label for="boolean-input">Boolean: </label>
     <input type="text" id="boolean-input" raven-value="propertyName3" />
    </div>

    <script>
    
    const viewModel = {
     propertyName1: RavenJS.Egg("bindable string"),
     propertyName2: RavenJS.Egg(1),
     propertyName3: RavenJS.Egg(false)
    };
    
    // Case 1 (use query-selector)
    RavenJS.CreateRavenNest("#demo-container", viewModel);
    
    // Case 2 (use instance)
    const container = document.getElementById("demo-container");
    RavenJS.CreateRavenNest(container, viewModel);
    
    </script>


### 1.4. Routing
#### 1.4.1. Links
#### 1.4.2. Routing events
##### 1.4.2. OnBeforeRouting
##### 1.4.3. OnAfterRouting
##### 1.4.4. Bind component to route
##### 1.4.5. Route guard
### 1.5. AJAX
#### 1.5.1 GET
##### 1.5.1.2. Get into object
##### 1.5.1.3. Get into Egg
##### 1.5.1.4. Get into Eggs
#### 1.5.2 POST
##### 1.5.2.1. Post from object
##### 1.5.2.2 Post from Egg
##### 1.5.2.3. Post from Eggs
### 1.6. Scopes
### 1.7. Error handlers

## 2. Extensions
### 2.1 Bindables
#### 2.1.1 OpenEgg
#### 2.1.2 OpenEggs
#### 2.1.3 UnbindEgg
#### 2.1.4 UnbindEggAll
#### 2.1.5 UnbindEggs
#### 2.1.6 UnbindEggsAll
#### 2.1.7 ToJson
#### 2.1.8 FromJson
### 2.2. Working with files
#### 2.2.1. Read file from input
#### 2.2.2. POST file to API
#### 2.2.3. GET file from API
#### 2.2.4. Return file to user
### 2.3. Custom attributes
#### 2.3.1. Create custom attribute
#### 2.3.2. Register custrom attribute
#### 2.3.3. Remove registered custom attribute
### 2.4. Array extensions
#### 2.4.1. Contains

## 3. Cookbook
### 3.1. Recommended naming convention

## 4. Get started
### 4.1. Download
### 4.2. Samples
#### 4.2.1. Binding samples

## 5. Contributing
