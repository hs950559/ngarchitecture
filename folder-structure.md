# Folder Structure

```
|-- app
     |-- modules
       |-- home
           |-- [+] components
           |-- [+] pages
           |-- home-routing.module.ts
           |-- home.module.ts
     |-- core
       |-- [+] authentication
       |-- [+] footer
       |-- [+] guards
       |-- [+] http
       |-- [+] interceptors
       |-- [+] services
       |-- [+] header
       |-- core.module.ts
       |-- ensureModuleLoadedOnceGuard.ts
       |-- logger.service.ts
     |
     |-- shared
          |-- [+] components
          |-- [+] directives
          |-- [+] pipes
          |-- [+] models
     |
     |-- [+] configs
|-- assets
     |-- scss
          |-- [+] partials
          |-- _base.scss
          |-- styles.scss
|-- scss
     |-- scss
          |-- [+] partials
          |-- _base.scss
          |-- styles.scss

|-- src
	  |-- mocks
```

## Modules

```
|-- modules
       |-- home
           |-- components
           |-- pages
           |    |-- home
           |         |-- home.component.ts|html|scss|spec
           |
           |-- home-routing.module.ts
           |-- home.module.ts
```

## The Core Module

The CoreModule takes on the role of the root AppModule , but is not the module which gets bootstrapped by Angular at run-time. The CoreModule should contain singleton services (which is usually the case), universal components and other features where there’s only once instance per application. To prevent re-importing the core module elsewhere, you should also add a guard for it in the core module’ constructor.

```
|-- core
       |-- [+] authentication
       |-- [+] guards
       |-- [+] http
       |-- [+] interceptors
       |-- [+] mocks
       |-- [+] services
       |-- core.module.ts
       |-- ensureModuleLoadedOnceGuard.ts
       |-- logger.service.ts
```


```
|-- authentication
     |-- authentication.service.ts|spec.ts
```

```
|-- http
     |-- user
          |-- user.service.ts|spec.ts
     |-- api.service.ts|spec.ts
```

```
|-- interceptors
       |-- api-prefix.interceptor.ts
       |-- error-handler.interceptor.ts
       |-- http.token.interceptor.ts
```

```
|-- guards
     |-- auth.guard.ts
     |-- no-auth-guard.ts
     |-- admin-guard.ts
```

```
|-- src
	  |-- mocks
            |-- data.json
```

All additional singleton services are placed in the services folder.

```
|-- services
     |-- srv1.service.ts|spec.ts
     |-- srv2.service.ts|spec.ts
```


## The Shared Module

The SharedModule is where any shared components, pipes/filters and services should go. The SharedModule can be imported in any other module when those items will be re-used. The shared module shouldn’t have any dependency to the rest of the application and should therefore not rely on any other module.


```
|-- shared
     |-- [+] components
     |-- [+] directives
     |-- [+] pipes
     |-- [+] services
```

```
|-- directives
      |-- auth.directive.ts|spec.ts
|-- pipes
     |-- capitalize.pipe.ts
     |-- safe.pipe.ts
|-- models
     |-- user.model.ts
     |-- server-response.ts
```

## Configs
The config folder contains app settings and other predefined values.


```
|-- configs
     |-- app-settings.config.ts
     |-- dt-norwegian.config.ts
```

## Styling
The global styles for the project are placed in a `scss` folder under `src` .

```
|-- src
     |-- scss
     		|-- components
     		|-- core
     		|-- custom
     		|-- vendors
     		|-- theme
     		|-- main.scss
```

## Resources
https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7

https://github.com/mathisGarberg/angular-folder-structure

https://github.com/gothinkster/angular-realworld-example-app















