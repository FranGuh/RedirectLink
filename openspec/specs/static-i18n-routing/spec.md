# Static i18n Routing Specification

## Purpose

Defines route-based Spanish and English localization for public RedirectLink pages, including equivalent routes, localized metadata, language alternates, and manual locale switching without automatic redirects.

## Requirements

### Requirement: Spanish Routes Remain Canonical

The system MUST preserve `/` and `/history` as Spanish public routes and MUST keep each Spanish route canonical to itself.

#### Scenario: Spanish home remains unchanged

- GIVEN a visitor opens `/`
- WHEN the page is rendered
- THEN the page content MUST be Spanish
- AND the canonical URL MUST identify `/`.

#### Scenario: Spanish history remains unchanged

- GIVEN a visitor opens `/history`
- WHEN the page is rendered
- THEN the page content MUST be Spanish
- AND the canonical URL MUST identify `/history`.

### Requirement: English Equivalent Routes

The system MUST provide English equivalents for the home and history pages at `/en` and `/en/history`.

#### Scenario: English home is available

- GIVEN a visitor opens `/en`
- WHEN the page is rendered
- THEN the page content and labels MUST be English.

#### Scenario: English history is available

- GIVEN a visitor opens `/en/history`
- WHEN the page is rendered
- THEN the history content MUST be English.

### Requirement: Manual Locale Switching

The system MUST expose a manual ES/EN switch that links each localized page to its equivalent route.

#### Scenario: Switch from Spanish to English equivalent

- GIVEN a visitor is on `/history`
- WHEN they choose English
- THEN they MUST navigate to `/en/history`.

#### Scenario: Switch from English to Spanish equivalent

- GIVEN a visitor is on `/en`
- WHEN they choose Spanish
- THEN they MUST navigate to `/`.

### Requirement: Localized Metadata and Alternates

Each localized page MUST emit language-appropriate title, description, social metadata, canonical URL, and `hreflang` alternates for Spanish and English equivalents.

#### Scenario: Metadata matches current locale

- GIVEN a visitor opens `/en/history`
- WHEN metadata is inspected
- THEN title, description, and social metadata MUST be English
- AND canonical URL MUST identify `/en/history`.

#### Scenario: Alternates map route equivalents

- GIVEN a visitor opens any localized page
- WHEN `hreflang` alternates are inspected
- THEN Spanish and English alternates MUST point to equivalent routes.

### Requirement: Existing Public Links Remain Valid

The system MUST NOT break existing public Spanish URLs or require redirects for `/` and `/history`.

#### Scenario: Existing Spanish links work directly

- GIVEN an existing public link points to `/history`
- WHEN a visitor opens it
- THEN the Spanish history page MUST render successfully.

### Requirement: No Automatic Language Redirects

The system MUST NOT automatically redirect visitors based on browser language in v1.

#### Scenario: Browser language does not force redirect

- GIVEN a visitor with an English-preferred browser opens `/`
- WHEN the request is handled
- THEN the visitor MUST remain on `/`
- AND the Spanish page MUST render.
