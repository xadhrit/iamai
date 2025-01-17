# iamai.config

iamai 配置。

iamai 使用 [pydantic](https://pydantic-docs.helpmanual.io/) 来读取配置。

## *class* `ConfigModel`(__pydantic_self__, **data) {#ConfigModel}

Bases: `pydantic.main.BaseModel`

iamai 配置模型。

- **Arguments**

  - **data** (*Any*)

- **Attributes**

  - **__config_name__** - 配置名称。

### *class* `Config`(self, /, *args, **kwargs) {#ConfigModel.Config}

Bases: `object`

- **Arguments**

  - **args**

  - **kwargs**

## *class* `LogConfig`(__pydantic_self__, **data) {#LogConfig}

Bases: `iamai.config.ConfigModel`

iamai 日志相关设置。

- **Arguments**

  - **data** (*Any*)

- **Attributes**

  - **level** (*Union[str, int]*) - 日志级别。

  - **verbose_exception** (*bool*) - 详细的异常记录，设置为 `True` 时会在日志中添加异常的 Traceback。

## *class* `BotConfig`(__pydantic_self__, **data) {#BotConfig}

Bases: `iamai.config.ConfigModel`

Bot 配置。

- **Arguments**

  - **data** (*Any*)

- **Attributes**

  - **plugins** (*Set[str]*) - 将被加载的插件列表，将被 `Bot` 类的 `load_plugins()` 方法加载。

  - **plugin_dirs** (*Set[pydantic.types.DirectoryPath]*) - 将被加载的插件目录列表，将被 `Bot` 类的 `load_plugins_from_dirs()` 方法加载。

  - **adapters** (*Set[str]*) - 将被加载的适配器列表，将依次被 `Bot` 类的 `load_adapters()` 方法加载。

  - **log** (*iamai.config.LogConfig*) - iamai 日志相关设置。

## *class* `PluginConfig`(__pydantic_self__, **data) {#PluginConfig}

Bases: `iamai.config.ConfigModel`

插件配置。

- **Arguments**

  - **data** (*Any*)

## *class* `AdapterConfig`(__pydantic_self__, **data) {#AdapterConfig}

Bases: `iamai.config.ConfigModel`

适配器配置。

- **Arguments**

  - **data** (*Any*)

## *class* `MainConfig`(__pydantic_self__, **data) {#MainConfig}

Bases: `iamai.config.ConfigModel`

iamai 配置。

- **Arguments**

  - **data** (*Any*)

- **Attributes**

  - **bot** (*iamai.config.BotConfig*) - iamai 的主要配置。

  - **plugin** (*iamai.config.PluginConfig*)

  - **adapter** (*iamai.config.AdapterConfig*)