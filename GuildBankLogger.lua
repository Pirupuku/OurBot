SlashCmdList["SLASH_GBL"] = function(flag) end
SLASH_GBL1 = "/gblog"
function SlashCmdList.GBL(args)
	local i = 0
	blog = ""
	for bag = -1, 10 do
		local slots = GetContainerNumSlots(bag)
		for slot = 1, slots do
			local itemLink = GetContainerItemLink(bag,slot)
			if itemLink then
				local icon, itemCount = GetContainerItemInfo(bag, slot)
				local itemName = GetItemName(itemLink)
				blog = table.concat({blog, itemCount, "~", itemName, "*"})
				i = i + 1
			end
		end
	end
	DEFAULT_CHAT_FRAME:AddMessage("Bag logs have been updated, " .. i .. " entries")
end

SlashCmdList["SLASH_GML"] = function(flag) end
SLASH_GML1 = "/gmlog"
function SlashCmdList.GML(args)
	local i = 0
	mlog = ""
	CheckInbox();
	for mailcount = 1, GetInboxNumItems() do
		local packageIcon, stationeryIcon, sender, subject, money, CODAmount, daysLeft, hasItem, wasRead, wasReturned, textCreated, canReply, isGM = GetInboxHeaderInfo(mailcount);
		local name, itemTexture, count, quality, canUse = GetInboxItem(mailcount);
		mlog = table.concat({mlog, sender, "~", money, "~", name, "~", count, "*"})
		i = i + 1
	end
	DEFAULT_CHAT_FRAME:AddMessage("Mail logs have been updated, " .. i .. " entries")
end

function GetItemName(some_string)
	local name_start = string.find(some_string, "%[") + 1
	local name_end = string.find(some_string, "%]") - 1
	return string.sub(some_string, name_start, name_end)
end


	
