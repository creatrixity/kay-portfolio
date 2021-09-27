---
title: "Improve async network state handling with custom React Hooks"
date: "2021-03-24T10:07:00.121Z"
template: "post"
draft: false
slug: "/posts/build-a-react-multi-step-wizard-with-formik-and-react-query"
category: "Front End"
tags:
  - "JavaScript"
  - "React"
  - "React Query"
  - "Formik"
description: "Multi step wizards are a solution allowing complex challenges to be broken down to a list of steps needed to accomplish a goal. Sometimes branching conditional logic is used to narrow the path to be taken by the user.."
socialImage: "https://paper-attachments.dropbox.com/s_E86B1B2D63F07F3F897CF2A503FB8B5EB7AA49926ED9F9E86682B041C6AE0F82_1614667109771_Screenshot+2021-03-02+at+7.38.10+AM.png"
---

# Build a React Multi step Wizard with Formik and React Query.

## Introduction

Forms are probably the most ubiquitous elements on the web today. You’d be hard pressed to find a critical application without one or more forms. Forms are especially critical in commerce and finance applications where conversion success rates could be the difference between a windfall and bleak numbers.

According to conversion authority [SaleCycle](https://salecycle.com), [**26% of people abandoned their purchase during checkout due to a long or complex process**](https://blog.salecycle.com/strategies/infographic-people-abandon-shopping-carts/)**.** That’s got to hurt the bottomline of any company!

It is best to keep forms simple and we can accomplish this by employing the [one thing per page pattern](https://www.smashingmagazine.com/2017/05/better-form-design-one-thing-per-page/) popularised by Adam Silver and we can easily achieve this by employing multi-step wizards.

## What are Multi-Step Wizards?

Multi step wizards are a solution allowing complex challenges to be broken down to a list of steps needed to accomplish a goal. Sometimes branching conditional logic is used to narrow the path to be taken by the user.

Multi-step wizards allow us drop cognitive overload by a significant factor and heighten user anticipation on what is required (from them).

Next, we’ll take a look at Formik and why it is such a great fit for form management in React.

## What is Formik?

[Formik](https://formik.org) is a small library that helps make form management super-easy.

[According to Jared Palmer](https://formik.org/docs/overview) (the creator of the library), Formik was created as a way to standardize the flow of data through forms whilst maintaining minimal impact to the look and feel of input components.

> **My goal with Formik was to create a scalable, performant, form helper with a minimal API that does the really really annoying stuff, and leaves the rest up to you.**
>
> - [Jared Palmer](https://twitter.com/jaredpalmer)

Formik is really beneficial because it:

- Allows declarative form management whilst abstracting the mundane/repetitive drone associated with working with forms in React.
- Keeps forms familiar and intuitive. If you know a bit of React and know about forms, then you know Formik.
- Make no assumptions about your current state management solutions. You could be using Redux or MobX and it will play nice with either.

## Why use Formik for Wizards?

Formik is a good fit for building multi step wizards because we can keep form state localized and managed by Formik freeing us of the cruft of devising a solution for that ourselves.

Formik allows us to maintain a single form management solution with benefits including:

- Formik is well documented so it can easily be referenced by yourself and team members.
- It makes it easier to maintain singular context when building apps as you know Formik got the forms business handled.
- Leverages a lot of practices already employed in building HTML forms making Formik forms feel much more natural and less like a contrived solution.

Now we have a solution for managing form state, we’ll talk about a solution for managing server state on our client app.

## React Query Introduction

React Query is a React library that makes **fetching, caching, synchronizing and updating server state** in your React applications a breeze.

React Query exists as a solution because managing server side state on the client is a well documented pain. Typically you’d have to provide:

- Proper caching solutions with easy cache invalidation ([notoriously difficult according to Phil Karlton](https://quotesondesign.com/phil-karlton/))
- Deduplication mechanisms for identifying duplicate data and merging them into one request to save on the overhead of multiple requests.
- Memoizing and normalizing data into a state where it is easier to access in a consistent fashion.

## Why use React Query?

React Query is one of the best libraries for managing server side state. React Query comes packing a lot of benefits. It can help:

- Drop the number of lines of code you need to make trivial requests.
- Make your applications feel more performant by saving on bandwidth and memory.
- Serve as a decoupling layer for remote calls as you can make REST/GraphQL requests and React Query will handle both use cases without a fuss.

React Query has been particularly helpful for me as in the past, I’ve had to make HTTP calls and use Paul Armstrong’s `normalizr` and Redux selectors as a caching mechanism which involved significant boilerplate and complexity.

Next, let’s move on to building a small proof-of -concept application with Formik and React Query.

## Creating a Concept Crypto Portfolio Management Wizard

We’ll create a little demo app that allows users add cryptocurrencies, specify third-party crypto marketplaces (like Robinhood & Coinbase) where they’d like to manage their portfolios.

Users then get to provide API tokens for the respective marketplaces selected.

## Pre-Requisites

- You have Node (version 6 and greater) and NPM installed.
- You have an **intermediate** to **advanced level** understanding of React.

## Setup Project

First of all, we create a new React project and start up the development server:

    npx create-react-app crypto-portfolio
    cd crypto-portfolio
    npm start

We need to install dependencies for routing, styling modules, form management and HTTP requests.

    npm install react-router-dom node-sass formik axios react-query classnames --save

A personal preference of mine is to [use absolute imports](https://create-react-app.dev/docs/importing-a-component) as I find them cleaner and much more easy to reason about. You can add absolute imports by creating a `jsconfig.json` file with the content below at the root directory:

    {
        "compilerOptions": {
          "baseUrl": "src"
        },
        "include": ["src"]
    }

For proper accessibility, we need to have each wizard screen contained in its own route. We’ll be employing a system of nested routes that allow us reflect semantic relationships via URLs.

We’ll update the `src/index.js` file to register our router:

    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import AppRouter from 'components/AppRouter';

    ReactDOM.render(
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>,
      document.getElementById('root')
    );

For our top level routes, let us define an `AppRouter` component that should help us setup a top level route for portfolio creation. Create an `AppRouter.js` file at `src/components` :

    import React, { Suspense, lazy } from "react"
    import { BrowserRouter, Route, Switch } from "react-router-dom";
    import NotFound from 'screens/NotFound'

    const Portfolio = lazy(() => import("screens/Portfolio"))

    function AppRouter() {
      return (
        <BrowserRouter>
          <Suspense fallback={<NotFound />}>
            <Switch>
              <Route component={Portfolio} path="/portfolio" />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      );
    }

    export default AppRouter;

We’re leveraging `Suspense` so we can lazy-load our route components for better performance. We also referenced `NotFound` and `Portfolio` components which we will create shortly. The `NotFound` component is a trivial component displaying a simple error message.

Create `src/screens/NotFound.js` and fill it out:

    function NotFound() {
        return (
            <div>
                <h2>Page not found</h2>
            </div>
        )
    }

    export default NotFound

Our `Portfolio` component provides a mounting point to introduce the `Formik` provider. We setup the Formik provider, provide default values for the form and assemble routes for each wizard screen. We also define some redirects to take care of possible incomplete URLs from our users.

We’ll import some styles from our `Portfolio.module.scss` CSS module. We also intend on creating an array list of routes that allows us define information about the steps in the wizard. We also plan on using a custom `StepsRouter` component to render the routes and a `Steps` indicator so users can get a visual on their progress.

Let’s create a `Portfolio.js` file at `src/screens/Portfolio` and add some code.

    import React, { Suspense } from "react"
    import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
    import { Formik } from "formik";
    import styles from './Portfolio.module.scss'
    import stepsComposer from './steps'
    import StepsRouter from 'components/StepsRouter'
    import NotFound from 'screens/NotFound'

    const initialFormValues = {
        portfolioName: '',
        marketplaces: {}
    }

    function Portfolio({ match: { url } }) {
        return (
            <div className={styles.Portfolio__Container}>
                <Formik initialValues={initialFormValues}>
                    <BrowserRouter>
                        <Suspense fallback={<NotFound />}>
                            <Switch>
                                <StepsRouter steps={stepsComposer({ url })} />
                                <Route exact path={`${url}/create`} render={() => <Redirect to={`${url}/create/add-name`} />} />
                                <Route path="/" render={() => <Redirect to={`${url}/create`} />} />
                                <Route component={NotFound} />
                            </Switch>
                        </Suspense>
                    </BrowserRouter>
                </Formik>
            </div>
        )
    }
    export default Portfolio

## Setting Up the Enhanced Custom Router

Let’s define the steps for our wizard in a `steps.js` file at `src/screens/Portfolio`. We’ll supply information about the route—mainly the component we intend to render, its path and the label for it on the step indicator.

    import { lazy } from "react"

    const AddName = lazy(() => import("./screens/AddName"))
    const SelectCrypto = lazy(() => import("./screens/SelectCrypto"))
    const AddKeys = lazy(() => import("./screens/AddKeys"))

    const stepsComposer = ({ url }) => [
        {
            path: `${url}/create/add-name`,
            Component: AddName,
            label: "Add Name"
        },
        {
            path: `${url}/create/select-crypto`,
            Component: SelectCrypto,
            label: "Select Crypto"
        },
        {
            path: `${url}/create/add-keys`,
            Component: AddKeys,
            label: "Add Keys"
        }
    ]

    export default stepsComposer

With our list of steps in hand, we need to create our `StepsRouter` component. Our `StepsRouter` component will pick up the list of steps we listed earlier and render each one. We’ll also define an `EnhancedRoute` component that will receive an extra prop which will be useful to us going forward.

We’ll create the `StepsRouter.js` file at `src/components/StepsRouter` .

    import { Route } from "react-router-dom";

    import EnhancedRoute from "./EnhancedRoute";

    const StepsRouter = ({ steps }) => {
        return (
            <>
                {steps.map((step, index) => (
                    <Route
                        path={step.path}
                        key={index}
                        render={props => <EnhancedRoute {...props} step={step} steps={steps} />}
                    />
                ))}
            </>
        );
    }

    export default StepsRouter;

We need to define the `EnhancedRoute` component that is responsible for ‘enhancing’ the `props` passed to the wizard screen routes. We’ll create `EnhancedRouter.js` at the same directory as the above.

    import { generateStepsList } from "utils";

    function EnhancedRoute ({ step, steps, ...props }) {
        const { match, location: { pathname } } = props;
        const { Component } = step
        const stepsList = steps.map(generateStepsList({
          route: { pathname, ...match },
        }));
        return (
            <Component {...props} stepsList={stepsList} />
        )
    }

    export default EnhancedRoute

We defined a `generateStepsList` utility function so we need to create the `utils.js` file at the `src` directory. This utility will return a fully resolved path for a route

    /**
     * Generates a list of steps for display by the steps component.
     *
     * This function returns a function that accepts a step object and returns
     * the object with extra properties.
     *
     * @param {Object} route
     * @returns {Function}
     */
    export function generateStepsList({ route }) {
        const routeParams = route.params
        const routeParamKeys = Object.keys(routeParams)
        // Swap out any dynamic routes with their param values so "/portfolio/:portfolioId" becomes "/portfolio/1"
        const replaceParams = (path, param) => path.replace(`:${param}`, routeParams[param]);
        const createStepEntry = ({ path, label }) => {
            let routePath = routeParamKeys.length ? routeParamKeys.reduce(replaceParams, path) : path
            let active = route.pathname === path
            return {
                path: routePath,
                active,
                label
            };
        }
        return createStepEntry;
      }

Now we need to create the `Steps.js` component at `src/components/Steps` as this component will display and give us visual progress updates.

We’ll use the `classnames` package to help us manage the conditional statements used to style the indicators and we’ll store information about the `active step`, the `last step` and the `completed steps` .

    import React from "react";
    import { Link } from "react-router-dom";
    import styles from "./Steps.module.scss";
    import classNames from "classnames/bind";

    let cx = classNames.bind(styles);

    function Steps({ steps }) {
      const activeIdx = steps.reduce((acc, curr, idx) => curr.active ? idx: acc, 0)

      return (
        <div className={styles.Steps__Wrapper}>
          <ol className={styles.Steps}>
            {steps.map(({ label, path, active }, idx) => {
              const isLastStep = idx === steps.length - 1;
              const completed = idx < activeIdx
              const stepWidth = 100 / (steps.length);
              let stepClasses = cx({
                Step: true,
                Step__Last: isLastStep,
                Step__Current: active,
                Step__Completed: completed
              });
              const checkmarkClass = completed ? 'checkmark-primary': 'checkmark-default'
              return (
                <li className={stepClasses} style={{ left: `${stepWidth/2}%` }} key={idx}>
                  <Link to={path} className={styles.Step__Milestone}>
                    <i className={`checkmark ${checkmarkClass}`} />
                  </Link>
                  {active ? (
                    <span className={styles.Step__Label}>{label}</span>
                  ) : (
                    <Link to={path} className={styles.Step__Label}>
                      {label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      );
    }

    Steps.defaultProps = {
      steps: [],
    };

    export default Steps;

We also need to define styling for the `Steps` component so we create `src/components/Steps/Steps.module.scss` and add the content below:

    $secondary: #0056D8;
    $light-gray: #F0F1F3;
    $gray: #CCC;
    $pale-blue: #D3E0F2;

    .Steps__Wrapper {
        display: block;
      }

      .Steps {
        position: relative;
        display: flex;
        padding: 0;
        list-style: none;
        width: inherit;
      }

      .Step {
        position: relative;
        font-size: 12px;
        flex: 1;
      }

      .Step__Label {
        color: $gray;
      }

      .Step {
        &::before {
          content: "";
          width: 100%;
          height: 8px;
          background-color: $gray;
          position: absolute;
        }

        &__Milestone {
          width: 28px;
          height: 28px;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: $light-gray;
          border: 2px solid $gray;
          position: relative;
          bottom: 10px;
          position: relative;
        }
      }

      .Step__Completed {
        &::before {
          background: $secondary;
        }
        .Step__Milestone {
          background: $pale-blue;
          color: $secondary;
          border-color: $secondary;
        }
      }

      .Step__Completed .Step__Label,
      .Step__Current .Step__Label {
        color: $secondary;
      }

      .Step__Current {
        .Step__Milestone {
          background: $secondary;
          border-color: $secondary;
        }
        .Step__Label {
          font-weight: bolder;
        }
      }

      .Step__Last::before {
        content: "";
        display: none;
      }

We’ll also define a few global styles at `src/index.css` and you can [take a look at the styles here](https://github.com/creatrixity/crypto-portfolio/blob/master/src/index.css).
At this point, you should have a visual indicator that looks like this:

![Visual steps indicator component UI](https://paper-attachments.dropbox.com/s_E86B1B2D63F07F3F897CF2A503FB8B5EB7AA49926ED9F9E86682B041C6AE0F82_1614667109771_Screenshot+2021-03-02+at+7.38.10+AM.png)

## Creating the `AddName` Screen

We can now create our first screen—the `AddName` screen. Create `AddName.js` at `src/screens/Portfolio/screens`

    import { Field } from "formik";
    import { Link } from "react-router-dom";
    import Steps from "components/Steps";
    import styles from 'screens/Portfolio/Portfolio.module.scss'

    function AddName({ stepsList, ...props }) {
        return (
            <div>
                <section className={styles.Section__Heading}>
                    <h2 className={styles.Section__Heading__Title}>Give your portfolio a name.</h2>
                    <p>A simple name to identify your portfolio by.</p>
                </section>
                <div className={styles.Steps__Container}>
                    <Steps steps={stepsList} />
                </div>
                <section className={styles.Form__Card}>
                    <label className={styles.Form__Label}>Portfolio Name</label>
                    <Field
                      type="text"
                      name="portfolioName"
                      className={styles.Form__Field}
                    />
                    <div className={styles.Form__Button__Container}>
                        <Link to={`/portfolio`} className="btn">
                            <span className="chevron left" />
                            Back
                        </Link>
                        <Link to={`/portfolio/create/select-crypto`} className="btn btn-primary">
                            Select Crypto
                            <span className="chevron right" />
                      </Link>
                    </div>
                </section>
            </div>
        )
    }

    export default AddName

Our `AddName` screen should look like this now

![A shot of the Add Portfolio Name screen](https://paper-attachments.dropbox.com/s_E86B1B2D63F07F3F897CF2A503FB8B5EB7AA49926ED9F9E86682B041C6AE0F82_1614668021667_Screenshot+2021-03-02+at+7.52.26+AM.png)

## Setting up a Mock JSON API

For our next screen, we’ll need to run a mock JSON server which we’ll use to fetch a list of crypto and marketplaces associated with them.

First of all, run `npm install -g json-server` to install the `json-server` package we’ll use for mocking.

Next, create a `crypto.json` file at a new directory we’ll name `mocks` at the root directory. We’ll add some seed data to the file.

    {
        "crypto": [
            {
                "id": 1,
                "label": "Bitcoin",
                "name": "bitcoin",
                "marketplaces": [
                    {"id":1, "label": "Robinhood", "brand_url": "http://localhost:3000/brands/robinhood.svg", "name":"robinhood"},
                    {"id":2, "label": "Coinbase", "brand_url": "http://localhost:3000/brands/coinbase.svg", "name":"coinbase"}
                ]
            },
            {
                "id": 2,
                "label": "Ethereum",
                "name": "ethereum",
                "marketplaces": [
                    {"id":1, "label": "Robinhood", "brand_url": "http://localhost:3000/brands/robinhood.svg", "name":"robinhood"},
                    {"id":2, "label": "Coinbase", "brand_url": "http://localhost:3000/brands/coinbase.svg", "name":"coinbase"}
                ]
            }
        ],

        "marketplaces": [
            {"id":1, "label": "Robinhood", "brand_url": "http://localhost:3000/brands/robinhood.svg", "name":"robinhood"},
            {"id":2, "label": "Coinbase", "brand_url": "http://localhost:3000/brands/coinbase.svg", "name":"coinbase"}
        ]
    }

We’ll start the JSON server by visiting the shell and running the below command which makes data from the mock available at port `3001`

    json-server --watch mocks/data.json --port 3001

## Building the Select Crypto Screen

We need to add a couple of specialized form controls for the crypto selection screen. I’ve prebuilt a `CheckboxCard` and also a `CheckboxRound` component to save time. You may read the source for the `[CheckboxCard](https://github.com/creatrixity/crypto-portfolio/blob/master/src/components/CheckboxCard/CheckboxCard.js)` and the `[CheckboxRound](https://github.com/creatrixity/crypto-portfolio/blob/master/src/components/CheckboxRound/CheckboxRound.js)` if you desire.
[](https://github.com/creatrixity/crypto-portfolio/blob/master/src/components/CheckboxRound/CheckboxRound.js)
We can now create our next screen—the `SelectCrypto` screen. We’ll be doing a lot in this screen as we’ll need to define a new `CryptoField` component that is responsible for showing crypto marketplace information. When the component mounts, we will preselect all crypto marketplaces so the user finds it easier to eliminate options.

For this screen, we’ll use the `Formik` context hook which allows us to get and set values for our form. We also use `React-Query` to fetch

I defined a couple of utility functions to help with our HTTP request management and take care of error/success responses. Update `src/utils` and add the below:

    import axiosInstance from 'axios'

    const REACT_APP_API_BASE_URL = "http://localhost:3001"

    export const axios = axiosInstance.create({
        baseURL: REACT_APP_API_BASE_URL,
    });

    export function handleResponse(response) {
        if (response.data) {
          return Promise.resolve(response.data);
        }

        return Promise.resolve(response);
    }

    export function handleError(error) {
        if (error.data) {
            return Promise.reject(error.data);
        }

        return Promise.reject(error);
    }

    export const fetchAll = (resource) => axios.get(resource).then(handleResponse).catch(handleError);

As part of our development process, we’ll iterate through the cryptocurrencies list we fetched and render a `CryptoField` component for each entry.

Create `SelectCrypto.js` at `src/screens/Portfolio/screens` and add the below:

    import { useEffect } from 'react'
    import { useQuery } from "react-query";
    import { Link } from "react-router-dom";
    import { useFormikContext } from "formik";

    import Steps from "components/Steps";
    import CryptoField from "components/CryptoField";
    import styles from 'screens/Portfolio/Portfolio.module.scss'
    import { fetchAll } from 'utils'

    function SelectCrypto({ stepsList }) {
        const { values, setFieldValue } = useFormikContext();
        const { isLoading, error, data: cryptocurrencies } = useQuery(
            "cryptocurrencies",
            () => fetchAll("/crypto")
        );

        useEffect(() => {
            // Prefill all marketplaces by reducing the cryptocurrencies list
            if (!Object.keys(values.marketplaces).length) {
              let marketplaces = cryptocurrencies.reduce((acc, curr) => {
                return {
                  ...acc,
                  [curr.id]: curr.marketplaces.map(({ id }) => id),
                };
              }, {});

              // Use the context hook to replace the marketplaces object
              setFieldValue("marketplaces", marketplaces);
            }
        }, [cryptocurrencies, setFieldValue, values.marketplaces]);

        if (isLoading) return <p>Loading...</p>
        if (error) return <p>Error</p>

        return (
            <div>
                <section className={styles.Section__Heading}>
                    <h2 className={styles.Section__Heading__Title}>Select the crypto you wish to manage</h2>
                    <p>Pick cryptocurrencies and choose exchanges to trade them on.</p>
                </section>
                <div className={styles.Steps__Container}>
                    <Steps steps={stepsList} />
                </div>
                <section className={styles.Form__Card}>
                    {cryptocurrencies.map((crypto, idx) => (
                        <div className="mb-2" key={idx}>
                            <CryptoField
                                crypto={crypto}
                                selectedMarketplaces={values.marketplaces[crypto.id] || []}
                            />
                        </div>
                    ))}
                    <div className={styles.Form__Button__Container}>
                        <Link to={`/portfolio/create`} className="btn">
                            <span className="chevron left" />
                            Back
                        </Link>
                        <Link to={`/portfolio/create/add-keys`} className="btn btn-primary">
                            Add Keys
                            <span className="chevron right" />
                      </Link>
                    </div>
                </section>
            </div>
        )
    }
    export default SelectCrypto

**Creating the CryptoField Component**

The `CryptoField` component displays a cryptocurrency and the marketplaces associated with it.
It receives the following as `props`:

- A `crypto` object which contains a list of marketplaces to be selected by a user
- A `selectedMarketplaces` array which contains the `id` for each selected marketplace.

Let’s create the `CryptoField.js` file at `src/components/CryptoField` and add some code. At the moment we’re rendering a checkbox component and displaying a description. We’re using the `FieldArray` component from `Formik` to handle working with the marketplaces array and the render prop for the `FieldArray` can [receive a bunch of helpers as arguments](https://formik.org/docs/api/fieldarray#fieldarray-helpers).
Our strategy is to mark a cryptocurrency as selected if it has at least one marketplace selected.

    import React from "react";
    import { FieldArray } from "formik";

    import CheckboxRound from "components/CheckboxRound";

    const descriptions = {
        bitcoin: "Bitcoin was the first cryptocurrency to successfully record transactions on a secure, decentralized blockchain-based network.",
        ethereum: "Ethereum is a decentralized computing platform which runs smart contracts and uses the Ether cryptocurrency built on top of the open source Ethereum blockchain"
    }

    const CryptoField = ({ crypto, selectedMarketplaces }) => {
        return (
            <FieldArray
                name={`marketplaces.${crypto.id}`}
                render={(arrayHelpers) => (
                    <section className="">
                        <section className="d-flex align-items-center">
                            <CheckboxRound
                                checked={selectedMarketplaces.length}
                                onChange={() => {
                                    if (selectedMarketplaces.length) {
                                        selectedMarketplaces.map(() => arrayHelpers.pop());
                                    } else {
                                        crypto.marketplaces.map(({ id }) => arrayHelpers.push(id));
                                    }
                                }}
                                id={crypto.name}
                            />
                            <div className="ml-4 d-flex">
                                <img src={crypto.brand_url} alt={`${crypto.label} logo`} className="mr-6" />
                                <b className="h6">{crypto.label}</b>
                            </div>
                        </section>
                        <div className="w-100 mb-4 ml-3">
                            {descriptions.hasOwnProperty(crypto.name) ? (
                                <p className="text-muted small">{descriptions[crypto.name]}</p>
                            ) : null}
                        </div>
                    </section>
                )}
            />
        )
    }

    export default CryptoField

At the moment, our screen should look like below

![A shot of the Select Crypto screen with coins only](https://paper-attachments.dropbox.com/s_E86B1B2D63F07F3F897CF2A503FB8B5EB7AA49926ED9F9E86682B041C6AE0F82_1614936899255_Screenshot+2021-03-05+at+10.34.40+AM.png)

We need to display the marketplaces so we will make an update to the `CryptoField` component. We will loop through marketplaces list and display a `CheckboxCard` for each marketplace.

      <div className="d-flex mb-3">
      {crypto.marketplaces.map((marketplace, idx) => {
          const marketplaceSelected = selectedMarketplaces.includes(marketplace.id);
          return (
              <section className="mr-4 flex-1" key={idx}>
                  <CheckboxCard
                      checked={marketplaceSelected}
                      onChange={(e) => {
                          if (marketplaceSelected) {
                              arrayHelpers.remove(
                                  selectedMarketplaces.indexOf(marketplace.id)
                              );
                          } else {
                              arrayHelpers.push(marketplace.id);
                          }
                      }
                  }
                  label={marketplace.label}
                  >
                  <img src={marketplace.brand_url} alt="Marketplace logo" />
                  </CheckboxCard>
              </section>
          );
      })}
      </div>

Now we have a complete interface that looks like below

![A shot of the Select Crypto screen with coins and marketplaces](https://paper-attachments.dropbox.com/s_E86B1B2D63F07F3F897CF2A503FB8B5EB7AA49926ED9F9E86682B041C6AE0F82_1615099803308_Screenshot+2021-03-07+at+7.49.11+AM.png)

## Completing the Add Keys Screen

The `AddKey` screen is pretty similar to the `SelectCrypto` screen. We will be allowing users update keys on only marketplaces they selected and to do this, we need to fetch the ids of the marketplaces, pass them into a `Set` (to get rid of duplicates) and then use them to create a list to iterate through.

Make an update to `src/screens/Portfolio/AddKeys.js`

    import { useState, useEffect } from "react";
    import { useQuery } from "react-query";
    import { Link } from "react-router-dom";
    import { fetchAll } from 'utils'
    import { useFormikContext } from "formik";

    import Steps from "components/Steps";
    import styles from 'screens/Portfolio/Portfolio.module.scss'
    import MarketplaceKeyField from "components/MarketplaceKeyField";

    function AddKeys({ stepsList }) {
        const [selectedMarketplaces, setSelectedMarketplaces] = useState([])
        const { isLoading, error, data: marketplacesList = [] } = useQuery(
            "marketplaces",
            () => fetchAll("/marketplaces")
        );

        const marketplaces = marketplacesList.reduce((acc, curr) => ({
            ...acc,
            [curr.id]: curr
        }), {})

        const { values } = useFormikContext();

        useEffect(() => {
            const selectedMarketplaces = [
                ...new Set(
                    Object.values(values.marketplaces).reduce(
                        (vendorsList, vendor) => [...vendorsList, ...vendor],
                        []
                    )
                )
            ]
            setSelectedMarketplaces(selectedMarketplaces)
        }, [values.marketplaces])

        if (isLoading) return <p>Loading...</p>
        if (error) return <p>Error</p>

        return (
            <div>
                <section className={styles.Section__Heading}>
                    <h2 className={styles.Section__Heading__Title}>Take control with your keys.</h2>
                    <p>Adding your keys allows you more control over integrations.</p>
                </section>

                <div className={styles.Steps__Container}>
                    <Steps steps={stepsList} />
                </div>

                <section className={styles.Form__Card}>
                    {selectedMarketplaces.map((marketplaceId, idx) => (
                        <div className="mb-4" key={idx}>
                            <MarketplaceKeyField marketplace={marketplaces[marketplaceId]} />
                        </div>
                    ))}

                    <div className={styles.Form__Button__Container}>
                        <Link to={`/portfolio/create/select-crypto`} className="btn">
                            <span className="chevron left" />
                            Back
                        </Link>
                        <button
                            type="submit"
                            className="btn btn-sm btn-primary font-weight-bold"
                        >
                            Submit
                            <span className="chevron right" />
                        </button>
                    </div>
                </section>
            </div>
        )
    }
    export default AddKeys

**Creating the MarketplaceKeyField Component**

We need to define the `MarketplaceKeyField` component which will be display the input fields for the marketplaces. We’ll use the `useField` Formik hook to get and set single field values.

Create `MarketplaceKeyField.js` at `src/components/Marketplace/MarketplaceKeyField` and update.

    import { FieldArray, useField } from "formik";

    const MarketplaceKeyField = ({ marketplace }) => {
        const identifier = `secrets.${marketplace.id}`;
        const [field, , helpers] = useField(identifier);

        return (
            <FieldArray
                name={`marketplaces.${marketplace.id}`}
                render={() => {
                return (
                    <div className="d-flex">
                    <label htmlFor={identifier} className="mr-4" style={{ width: "50%" }}>
                        <img
                        src={marketplace.brand_url}
                        alt={marketplace.label}
                        className="img img-responsive"
                        />
                    </label>
                        <input
                        className="d-inline-block w-100"
                        id={identifier}
                        name={identifier}
                        value={field.value || ""}
                        autoSave={false}
                        onChange={(e) => helpers.setValue(e.target.value)}
                        type="password"
                        />
                    </div>
                );
                }}
          />
        )
    }

    export default MarketplaceKeyField

We have arrived at a result as seen below:

![A shot of the Add Keys screen](https://paper-attachments.dropbox.com/s_E86B1B2D63F07F3F897CF2A503FB8B5EB7AA49926ED9F9E86682B041C6AE0F82_1615121324789_Screenshot+2021-03-07+at+1.45.16+PM.png)

## Handling Form Submits with `Formik`

With our wizard screens and controls all set up, we need a way to send the information collected to a server for persistence and any further processing.

We’ll be making updates to the `Portfolio` component and wrapping the routes in a `<form/>` element. We’ll make use of a render function to gain access to the `Formik` submit handler and _then pass that handler to the form_

        return (
            <div className={styles.Portfolio__Container}>
                <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      {/* ...Rest of the Router goes here */}
                    </form>
                </Formik>
            </div>

We’ll define the submit handler shortly. When using `react-query`, information is persisted to the backend by using `mutations`. We’ll create our very first mutation and we’ll create a mutation request handler that logs our payload and if you had a functional server, you could initiate an actual `HTTP` or `graphql` request.

    import { useMutation } from "react-query";

    const portfolioCreationRequest = async (payload) => {
        console.log(JSON.stringify(payload))
        setTimeout(() => {
            return Promise.resolve("success");
        }, 3000)
      };

    function Portfolio({ match: { url, path }, history }) {
      const mutation = useMutation(portfolioCreationRequest, {
          onSuccess: () => {
            history.push(`${path}/success`);
          },
        });

      const handleFormSubmit = (values) => {
          const { portfolioName, marketplaces, secrets } = values;
          const payload = {
              portfolioName,
              marketplaces,
              secrets
          }

          mutation.mutate(payload)
      }
    // ... rest of the component
    }

Testing out our submit, we get to see the payload was successfully logged.

![A shot of the payload recorded when testing the Formik submit handler](https://paper-attachments.dropbox.com/s_E86B1B2D63F07F3F897CF2A503FB8B5EB7AA49926ED9F9E86682B041C6AE0F82_1615189148707_Screenshot+2021-03-08+at+8.38.48+AM.png)

## Conclusion

`Formik` and `React-Query` are formidable tools within the grasp of React engineers which can be leveraged to create consistent solutions to recurring problems.

I encourage a deeper delve into [Formik](https://formik.org/docs/overview) and [React Query](https://react-query.tanstack.com/quick-start) documentation as we utilized just a small subset of their respective API surfaces.

You can find the full source code on [Github](https://github.com/creatrixity/crypto-portfolio).

## Resources

- [Nick Babich's UX Planet Wizard Design Pattern Article](https://uxplanet.org/wizard-design-pattern-8c86e14f2a38)
- [Link to Github Repo](https://github.com/creatrixity/crypto-portfolio)
- [Head-first introduction to React Query](https://react-query.tanstack.com/quick-start)
- [Official Formik Documentation](https://formik.org/docs/overview)
- [The Importance of Form Design](https://www.clicky.co.uk/blog/the-importance-of-form-design/)
