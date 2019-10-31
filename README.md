> **Since Kirby 3.3.0, this feature is in Kirby's core**. This plugin is therefore obsolete.

# Kirby Quickpages

Quickly filter the Pages field's dialog.

![quickpages-screenshot](https://user-images.githubusercontent.com/14079751/55154600-8069d400-5155-11e9-92e2-3ade4124dbbf.jpg)

<br/>

## 1. Installation

> Note: I will not work on feature requests for this plugin since this feature will most likely end up in the core soon.

Download and copy this repository to ```/site/plugins/quickpages```

Alternatively, you can install it with composer: ```composer require sylvainjule/quickpages```

<br/>

## 2. Setup

Replaces the `pages` field with `quickpages` in your blueprint.

## 3. Options

The filed shares all the option with the `pages` field, and an additional one:

```yaml
quickpages:
  type: quickpages
  # wheter the input string should match the beginning of a title only (true) or match any part of the title (false)
  start: false
```

## 4. License

MIT
