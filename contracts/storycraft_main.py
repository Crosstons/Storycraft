import smartpy as sp

@sp.module
def main():
    class Story(sp.Contract):
        def __init__(self, title, first_chapter_hash):
            
            self.data.author = sp.sender
            self.data.crafters = sp.set()
            self.data.title = title
            chapters = sp.big_map()
            ongoing = False
            chapter_id = sp.nat(1)
            current_proposal = sp.record(
                votes = sp.big_map(),
                option_1 = sp.bytes(""),
                option_2 = sp.bytes(""),
                option_3 = sp.bytes(""),
                active = False
            )
            self.data.chapters[1] = first_chapter_hash
            
            @sp.entry_point
            def propose_chapter(self, params):
                assert sp.sender == self.data.author
                assert self.data.current_proposal.active == False
                self.data.current_proposal.option_1 = params.option_1
                self.data.current_proposal.option_2 = params.option_2
                self.data.current_proposal.option_3 = params.option_3
                self.data.current_proposal.active = True