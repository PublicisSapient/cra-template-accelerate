# Recommended Folder Structure

React Accelerate recommends using the following folder structure for your app:

```
/src
  /components
  /contexts
  /features
  /models
  /utils
```

The most important folder is the `features` folder which contains a folder for
each feature of the app. A "feature" is defined as a distinct business function
supported by your app. For example, a newspaper site might support features like
World News, Local News, Politics, Business, Tech, Sports, Arts and Food. A
feature might be presented as a set of one or more pages or tabs.

From an implementation perspective, it is important to keep each feature
independent of others. This implies that any models (data structures),
components, contexts and services needed by the feature should be contained in
the feature folder. For example, the diagram below shows some files that may be
contained in the "News" folder:

```
/src
  /features
    /News
      news components
      news contexts
      news models
      ...
```

Any artifact that is used by multiple features should be kept in the appropriate
global folder under `src`. For example,

```
/src
  /components
    /Header
      Header.tsx
      Header.css
  /contexts
    UserContext.tsx
  /models
    User.ts
  /utils
    Constants.ts
    StringUtils.ts
```

## Tips

(Based on
[Angular Style Guide](https://angular.io/guide/styleguide#application-structure-and-ngmodules))

Structure your app such that you can

1. Locate code quickly
2. Identify the code at a glance
3. Keep the Flattest structure you can
4. Try to be DRY.

Emphasizing point #3 above, keep the folder structure as flat as possible. No
one wants to search for a file through seven levels of folders! Consider
creating sub-folders when a folder reaches seven or more files.
