package gg.inconvenient.unifiedmaterials;

import com.hypixel.hytale.server.core.event.events.player.PlayerReadyEvent;
import com.hypixel.hytale.server.core.plugin.JavaPlugin;
import com.hypixel.hytale.server.core.plugin.JavaPluginInit;
import gg.inconvenient.unifiedmaterials.commands.ExampleCommand;
import gg.inconvenient.unifiedmaterials.events.ExampleEvent;

import javax.annotation.Nonnull;

public class UnifiedMaterials extends JavaPlugin {

    public UnifiedMaterials(@Nonnull JavaPluginInit init) {
        super(init);
    }

    @Override
    protected void setup() {
        this.getCommandRegistry().registerCommand(new ExampleCommand("example", "An example command"));
        this.getEventRegistry().registerGlobal(PlayerReadyEvent.class, ExampleEvent::onPlayerReady);
    }
}